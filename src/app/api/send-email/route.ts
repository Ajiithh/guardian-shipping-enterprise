import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try {
    console.log(
      "RESEND KEY EXISTS:",
      !!process.env.RESEND_API_KEY
    );

    console.log(
      "API KEY VALUE:",
      process.env.RESEND_API_KEY
        ? "FOUND"
        : "NOT FOUND"
    );

    const resend = new Resend(
      process.env.RESEND_API_KEY
    );

    const body =
      await request.json();

    console.log(
      "EMAIL REQUEST:",
      body
    );

    const response =
      await resend.emails.send({
        from:
          "Guardian Shipping <onboarding@resend.dev>",

        to: [
          "info@guardianshipping.com",
          "ajith@guardianshipping.com",
        ],

        subject:
          `New Lead - ${body.service}`,

        html: `
          <h2>New Website Lead</h2>

          <p><strong>Name:</strong>
          ${body.name}</p>

          <p><strong>Email:</strong>
          ${body.email}</p>

          <p><strong>Phone:</strong>
          ${body.phone}</p>

          <p><strong>Service:</strong>
          ${body.service}</p>

          <p><strong>Message:</strong></p>

          <div>
            ${body.message}
          </div>
        `,
      });

    console.log(
      "EMAIL RESPONSE:",
      response
    );

    return NextResponse.json({
      success: true,
      response,
    });

  } catch (error) {
    console.error(
      "EMAIL ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}