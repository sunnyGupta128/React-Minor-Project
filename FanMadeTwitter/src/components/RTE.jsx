import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'


export default function RTE({name, control, label, defaultValue=""}) {
    

  return (
    <div className='w-full'>
        {label && <label  className='inline-block mb-1 px-1'>{label}</label>}
        <Controller
        name={name||"content"}
        control={control}
        render={({field: {onChange}})=>(
            <Editor
            initialValue={defaultValue}
            apiKey='11ema5b5mgo6grx3ev933a80o5v1cl19n9137shdh9nitvop'
            init={{
                height:500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}

