import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'


export default function RTE({name, control, label, defaultValue=""}) {
    

  return (
    <div className='w-full'>
        {label && <label  className='inline-block mb-1 px-1'>{label}</label>}
        <Controller
        name={name||'rte'}
        control={control}
        render={({field: {onChange}})=>(
            <Editor
            initialValue={defaultValue}
            init={{
                height:500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                block_formats: 'Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5;Header 6=h6',
                color_cols_background: '#ffffff,#000000,#eeece1,#1f497d,#4f81bd,#c0504d,#9bbb59,#8064a2,#4bacc6,#f79646,#ffff00,#f2f2f2',
                color_cols: '#ffffff,#000000,#eeece1,#1f497d,#4f81bd,#c0504d,#9bbb59,#8064a2,#4bacc6,#f79646,#ffff00,#f2f2f2',
                font_css: 'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i',
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}

