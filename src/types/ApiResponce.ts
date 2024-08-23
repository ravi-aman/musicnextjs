import { Message } from "@/model/User";


export interface ApiResponce {
    success: boolean;
    // message: string;
    isAccesptingMessages?: boolean;
    message?:Array<Message>
}