import { Resend } from "resend";
import type { ContactFormData, EmailConfig } from "@/types";
import {
  createAdminEmailTemplate,
  createAdminEmailText,
  createAutoReplyTemplate,
  createAutoReplyText,
} from "@/utils/emailTemplates";

// Email configuration
const EMAIL_CONFIG = {
  adminEmail: process.env.ADMIN_EMAIL || "murat.isler@maxeff.com.tr",
  fromEmail: "onboarding@resend.dev", // Use this for testing, change to your domain later
  noReplyEmail: "onboarding@resend.dev", // Use same for now until domain is verified
} as const;

/**
 * Get Resend instance (lazy initialization)
 */
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("⚠️ RESEND_API_KEY is not set");
    return null;
  }

  return new Resend(apiKey);
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates contact form data
 */
export const validateContactForm = (data: ContactFormData): string | null => {
  const { name, email, subject, message } = data;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return "All fields are required";
  }

  if (!isValidEmail(email)) {
    return "Please enter a valid email address";
  }

  if (message.length < 10) {
    return "Message must be at least 10 characters";
  }

  return null; // No errors
};

/**
 * Sends email to admin
 */
export const sendAdminNotification = async (data: ContactFormData) => {
  const resend = getResendClient();

  if (!resend) {
    console.log(
      "📧 [Dev Mode] Admin email would be sent to:",
      EMAIL_CONFIG.adminEmail
    );
    console.log("📧 [Dev Mode] Email content:", {
      subject: `[Contact Form] ${data.subject}`,
      from: data.email,
      message: data.message,
    });
    return { id: "dev-mode-admin", success: true };
  }

  const emailConfig: EmailConfig = {
    from: EMAIL_CONFIG.fromEmail,
    to: EMAIL_CONFIG.adminEmail,
    subject: `[Contact Form] ${data.subject}`,
    html: createAdminEmailTemplate(data),
    text: createAdminEmailText(data),
    replyTo: data.email,
  };

  return await resend.emails.send(emailConfig);
};

/**
 * Sends auto-reply to sender
 */
export const sendAutoReply = async (data: ContactFormData) => {
  const resend = getResendClient();

  if (!resend) {
    console.log("📧 [Dev Mode] Auto-reply would be sent to:", data.email);
    console.log("📧 [Dev Mode] With message: Thank you for contacting MAXEFF");
    return { id: "dev-mode-reply", success: true };
  }

  const emailConfig: EmailConfig = {
    from: EMAIL_CONFIG.noReplyEmail,
    to: data.email,
    subject: "Thank you for contacting MAXEFF",
    html: createAutoReplyTemplate(data.name),
    text: createAutoReplyText(data.name),
  };

  return await resend.emails.send(emailConfig);
};

/**
 * Main function to handle contact form submission
 */
export const handleContactFormSubmission = async (data: ContactFormData) => {
  // Validate form data
  const validationError = validateContactForm(data);
  if (validationError) {
    throw new Error(validationError);
  }

  try {
    // Check if we're in development mode without Resend
    if (!process.env.RESEND_API_KEY) {
      console.log("🚀 [Development Mode] Processing contact form submission");
      console.log("📝 Form Data:", data);

      // Simulate email sending in development
      await sendAdminNotification(data);
      await sendAutoReply(data);

      return {
        success: true,
        message:
          "Message sent successfully! (Development mode - no actual emails sent)",
        data: {
          mode: "development",
          timestamp: new Date().toISOString(),
        },
      };
    }

    // Production mode - send real emails
    const [adminEmail, autoReply] = await Promise.all([
      sendAdminNotification(data),
      sendAutoReply(data),
    ]);

    // Log for debugging (remove in production)
    if (process.env.NODE_ENV === "development") {
      console.log("✅ Admin email sent:", adminEmail);
      console.log("✅ Auto-reply sent:", autoReply);
    }

    return {
      success: true,
      message: "Message sent successfully!",
      data: { adminEmail, autoReply },
    };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};
