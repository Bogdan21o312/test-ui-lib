import React, {FC, ReactNode} from 'react';
import "./MyButton.css"

export interface MyButtonProps {
    color: string;
    children: ReactNode
}

export const MyButton: FC<MyButtonProps> = ({color, children, ...props}) => {
    return (
        <button {...props} className="Button" style={{color}}>
            {children}
        </button>
    );
};
