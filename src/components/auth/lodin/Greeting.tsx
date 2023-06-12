import React from 'react';


interface IGreeting  {
    name:string,
}
export const Greeting = ({name}:IGreeting) => {
    return (
        <div>
            Hellow {name}
        </div>
    );
};

