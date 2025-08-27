import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData, ApiResponse } from "@/types";
import { handleContactFormSubmission } from "@/services/emailService";
/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const formData: ContactFormData = await request.json();

    // Process form submission
    const result = await handleContactFormSubmission(formData);

    // Return success response
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    // Handle errors
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send message";

    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 400 }
    );
  }
}

/**
 * GET /api/contact
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Contact API is working",
      data: {
        timestamp: new Date().toISOString(),
        status: "healthy",
      },
    },
    { status: 200 }
  );
}
