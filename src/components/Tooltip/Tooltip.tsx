import './Tooltip.css';
import { useState } from 'react';
import classNames from 'classnames';

interface ITooltip {
    children: JSX.Element;
    content: string;
    className?: string;
    maxLength: number;
}

function Tooltip({children, content, className, maxLength}: ITooltip) {
    const [isShowingContent, setIsShowingContent] = useState<boolean>(false);

    return (
        <div className="tooltip">
            <div 
                onMouseEnter={(event)=>setIsShowingContent(true)} 
                onMouseLeave={()=>setIsShowingContent(false)}>
                {children}
            </div>

            {(isShowingContent && content.length>maxLength) && <div className={classNames("pop-up-window", className)}>{content}</div>} 
        </div>
    )
}
export default Tooltip;