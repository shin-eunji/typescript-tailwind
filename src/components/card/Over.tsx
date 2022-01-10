import React, {useState} from 'react';

interface CardProps {
  id: number;
  title: string;
  subtitle?: string;
  style?: string;
}

function Over ({ id, title, subtitle = '', style = ''}: CardProps) {
  
  const [over, setOver] = useState<boolean>(false);

  return (
    <div className={style} onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
      {
        over &&
          <div className="absolute bottom h-full">
						<div className="flex items-end justify-start p-2 h-full">
							<div className="w-10 h-10 bg-gray-900 rounded-full mr-2" />
              <div className="flex flex-col">
                <span className="text-sm text-white font-semibold">{title}</span>
                <span className="text-sm text-white font-light">{subtitle}</span>
              </div>
						</div>
          </div>
      }
    </div>
  )
}

export default Over;
