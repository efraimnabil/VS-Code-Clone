interface IProps {
    src: string;
    className?: string;
}

const IconImg = ({src, className}: IProps) => {
  return (
    <img src={src} alt="icon" className={`w-6 h-6 mr-1 select-none ${className}`} />
  )
}

export default IconImg