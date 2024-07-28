import {resend} from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmails"
import {ApiResponse} from "@/types/ApiResponse";
import { Verification } from "next/dist/lib/metadata/types/metadata-types";


export async function sendVerificationEmail (
    email: string,
    username: string, 
    verifyCode: string
): Promise<ApiResponse>{

    try{


        
        await resend.emails.send({
            from: 'sanjay@webderivatives.in',
            to: 'email',
            subject: 'Verification Code',
            react: <VerificationEmail({username, otp: verifyCode}) />,
        });

        return {success: false, message: 'verification email sent successfully'}


    }
    catch(emailError){
        console.error("Error sending verification email", emailError)
        return {success: false, message: 'failed to send verification email'}
    }

}