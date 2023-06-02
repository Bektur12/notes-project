// import React, { useEffect, useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import CustomUploadAdapterPlugin from "./CustomUploadAdapterPlugin";

// const EditorComponent = () => {
//   const [editorLoaded, setEditorLoaded] = useState(false);
//   const [content, setContent] = useState("");

//   const editorConfig = {
//     plugins: [CustomUploadAdapterPlugin],
//     toolbar: [
//       "heading",
//       "|",
//       "bold",
//       "italic",
//       "link",
//       "bulletedList",
//       "numberedList",
//       "blockQuote",
//       "insertTable",
//       "|",
//       "imageUpload",
//       "imageStyle:full",
//       "imageStyle:alignLeft",
//       "imageStyle:alignRight",
//     ],
//     image: {
//       styles: {
//         full: {
//           width: "100%",
//           height: "auto",
//         },
//         alignLeft: {
//           float: "left",
//           marginRight: "20px",
//           width: "35%",
//           height: "auto",
//         },
//         alignRight: {
//           float: "right",
//           marginLeft: "20px",
//           width: "35%",
//           height: "auto",
//         },
//       },
//       upload: {
//         types: ["png", "jpg", "jpeg", "gif", "bmp"],
//       },
//     },
//   };

//   useEffect(() => {
//     setEditorLoaded(true);
//   }, []);

//   return (
//     <>
//       {editorLoaded && (
//         <CKEditor
//           editor={ClassicEditor}
//           config={editorConfig}
//           data={content}
//           onChange={(event, editor) => {
//             setContent(editor.getData());
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default EditorComponent;
