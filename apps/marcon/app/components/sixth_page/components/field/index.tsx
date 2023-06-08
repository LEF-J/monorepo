import React, { SetStateAction } from "react";

function SixthPageField({label, value, setValue}: {label: string, value: string, setValue: React.Dispatch<SetStateAction<string>>}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm1">{label}</label>
            <input 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                className="bg-stone-300 py-3"
            />
        </div>
    )
}

function SixthPageTextarea({label, value, setValue}: {label: string, value: string, setValue: React.Dispatch<SetStateAction<string>>}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm1">{label}</label>
            <textarea 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                className="h-[196px] resize-none bg-stone-300"
            ></textarea>
        </div>
    )
}

export {
    SixthPageField,
    SixthPageTextarea
};