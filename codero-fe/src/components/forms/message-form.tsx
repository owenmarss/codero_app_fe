"use client";
import { useState, useEffect } from "react";

// Importing the Select component
import Select, { MultiValue } from "react-select";

// Importing the Tiptap library
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

// Importing the icons
import BoldIcon from "../../../public/icons/bold-icon";
import ItalicIcon from "../../../public/icons/italic-icon";
import TextLeftIcon from "../../../public/icons/text-left-icon";
import TextRightIcon from "../../../public/icons/text-right-icon";
import TextCenterIcon from "../../../public/icons/text-center-icon";
import TextJustifyIcon from "../../../public/icons/text-justify-icon";

interface OptionType {
    value: string,
    label: string
}

export default function MessageForm() {
    // React Select for the recipients input
    const [allRecipients, setAllRecipients] = useState<MultiValue<OptionType>>([]);
    const [selectedRecipients, setSelectedRecipients] = useState<MultiValue<OptionType>>([]);
    

    const recipientsOptions:OptionType[] = [
        { value: "john_doe", label: "John Doe" },
        { value: "jane_smith", label: "Jane Smith" },
        { value: "michael_jordan", label: "Michael Jordan" },
    ];

    const handleRecipientsChange = (allOptions:any) => {

        setSelectedRecipients(allOptions);
 
    };
    
    async function getAllRecipients(page: number = 1) {
        try {
            const res = await fetch(`/api/getAllRecipient`, {
                method: "GET",
            });
            const data = await res.json();

            let newData:OptionType[] = [];
            data.forEach((recipient: any) => {
                newData.push({ value: recipient.id, label: recipient.first_name + " " + recipient.last_name });
            })

            console.log(recipientsOptions);
            
            console.log(newData);
            
            setAllRecipients(newData);
        } catch (error) {
            console.error("An unexpected error occurred:", error);
        }
    }

    useEffect(() => {
        getAllRecipients();
    }, []);

    // Tiptap editor for the message body input
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({
                types: ["paragraph", "heading"], // Configure alignment for paragraphs and headings
            }),
        ],
        content: `
                <p> </p>
            `,
        editorProps: {
            attributes: {
                class: "py-2 px-3 border border-gray-300 rounded-md text-gray-400 focus:text-black focus:outline-none focus:ring-1 focus:ring-primary",
            },
        },
    });

    if (!editor) {
        return null; // Return null or a loading state if the editor is not initialized
    }

    return (
        <div id="write_message_form" className="flex flex-col gap-5">
            <div id="write_message_to" className="flex flex-col gap-1.5 w-full">
                <label htmlFor="message_recipients_input" className="text-sm">
                    To:
                </label>

                <Select
                    id="message_recipients_input"
                    isMulti
                    // Type '{ value: string; label: string; }[]' is not assignable to type 'readonly GroupBase<never>[]'. Property 'options' is missing in type '{value: string; label: string;}'
                    options={allRecipients}
                    onChange={handleRecipientsChange} // Handle selection changes
                    value={selectedRecipients}
                    placeholder="Select or type recipients here..."
                    className="w-fit"
                    classNamePrefix="react-select"
                />
            </div>

            <div
                id="write_message_subject"
                className="flex flex-col gap-1.5 w-full"
            >
                <label htmlFor="subject" className="text-sm">
                    Subject:
                </label>
                <input
                    type="text"
                    id="subject"
                    className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-3/5"
                    placeholder="Write your subject here..."
                />
            </div>

            <div
                id="write_message_body"
                className="flex flex-col gap-1.5 w-full"
            >
                <label htmlFor="body" className="text-sm">
                    Message:
                </label>

                <EditorContent editor={editor} />
                <input type="hidden" name="" />

                <div
                    id="message_button"
                    className="flex gap-12 pt-2 items-center"
                >
                    <div
                        id="message_button_text_decoration"
                        className="flex gap-2"
                    >
                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                            className={`px-3 py-1 text-base font-bold rounded-md ${
                                editor.isActive("bold")
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            B
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().toggleItalic().run()
                            }
                            className={`px-3 py-1 italic rounded-md ${
                                editor.isActive("italic")
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            <ItalicIcon />
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().toggleUnderline().run()
                            }
                            className={`px-3 py-1 decoration-1 underline underline-offset-[3px] rounded-md ${
                                editor.isActive("underline")
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            U
                        </button>
                    </div>

                    <div id="message_button_text_align" className="flex gap-2">
                        <button
                            type="button"
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("left")
                                    .run()
                            }
                            className={`px-2 py-1.5 rounded-md ${
                                editor.isActive({ textAlign: "left" })
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            <TextLeftIcon />
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("center")
                                    .run()
                            }
                            className={`px-2 py-1.5 rounded-md ${
                                editor.isActive({ textAlign: "center" })
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            <TextCenterIcon />
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("right")
                                    .run()
                            }
                            className={`px-2 py-1.5 rounded-md ${
                                editor.isActive({ textAlign: "right" })
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            <TextRightIcon />
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("justify")
                                    .run()
                            }
                            className={`px-2 py-1.5 rounded-md ${
                                editor.isActive({ textAlign: "justify" })
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            <TextJustifyIcon />
                        </button>
                    </div>
                </div>
            </div>

            <div id="write_message_submit" className="flex justify-end">
                <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                    Send
                </button>
            </div>
        </div>
    );
}
