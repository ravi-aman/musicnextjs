import { resend } from "@/lib/resend"

import VerificationEmail from "../../emails/verificationEmail"

import { ApiResponce } from "@/types/ApiResponce"


export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponce> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: "Amango || verification code ",
            react:VerificationEmail({username,otp:verifyCode}),
          });
        return { success: true, message: 'Verification Email send succesfully' }
    } catch (emailError) {
        console.error("Error sending Verification of email", emailError)

        return { success: false, message: 'Failed to send Verification Email' }
    }
}