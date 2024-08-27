import React from 'react'

interface UserCardProps {
    userName : string , 
    companyName : string,
    avatar : string , 
    text : string
}

const UserCard: React.FC<UserCardProps> = ({userName,companyName,avatar,text}): JSX.Element => {
  return <div className="userCardWrapper min-h-44 bg-neutral-700 shadow-md rounded-md p-3 flex flex-col justify-around gap-3">
        
        <div className="textWrapper">
            <p className="text">
                {text}
            </p>
        </div>

        <div className="card flex gap-3">
            
        <div className="avatarWrapper rounded-md">
            <img src={avatar} alt='avatar' width="50px" />
        </div>

        <div className="flex flex-col gap-1">
            <h4 className="userName"> {userName} </h4>
            <p className="companyName text-neutral-400"> {companyName} </p>
        </div>

        </div>

  </div>
}

export default UserCard
