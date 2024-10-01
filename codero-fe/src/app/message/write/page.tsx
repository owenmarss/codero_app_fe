import MessageForm from "@/components/forms/message-form";

export default function Write() {
    return (
        <main id="write_message" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="write_message_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide"> Write Message </h1>
            </div>

            <MessageForm />
        </main>
    );
};
