import { ReactNode } from 'react';
interface myContainerProps {
  children: ReactNode
}

const Container:React.FC<myContainerProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Container
