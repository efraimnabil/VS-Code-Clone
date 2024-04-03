interface IProps {
    src: string;
}

const IconImg = ({src}: IProps) => {
  return (
    <img src={src} alt="icon" className="w-6 h-6" />
  )
}

export default IconImg