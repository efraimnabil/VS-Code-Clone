interface IProps {
    filename: string;
}

const FileIcon = ({filename}: IProps) => {
    const extention = filename.split('.').pop()
    
  return (
    <div>
        
    </div>
  )
}

export default FileIcon