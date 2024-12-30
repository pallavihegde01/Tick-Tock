import { useEffect, useState } from "react"

const Stopwatch = () => {
    const [time,setTime] = useState<number>(0);
    const [isActive,setIsActive] = useState<boolean>(false);
    const [laps, setLaps] = useState<number[]>([]);


    useEffect(()=>{
        let interval: NodeJS.Timeout |undefined;
        if(isActive){
            interval = setInterval(() => setTime((prev)=>prev+1),1000);
        }
        return () => clearInterval(interval);
    },[isActive]);

    const handleLap = () => {
        setLaps([...laps,time])
    };
  return (
    <div className="text-center">
        <h2 className="text-2xl mb-2 text-white">Stopwatch</h2>
        <div className="text-4xl mb-4 text-white">{time}s</div>
        <button className="px-4 py-2 bg-green-700 text-white rounded mr-2" onClick={()=>setIsActive(!isActive)}>{isActive ? 'Pause' : 'Start'}</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2" onClick={handleLap}>Lap</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={()=>{
            setIsActive(false);
            setTime(0);
            setLaps([]);
        }}>Reset</button>

        <div className="mt-4">
            <h3 className="text-xl mb-2 text-white">Laps</h3>
            <ul className="list-decimal text-white">
                {laps.map((lap,index:number) => (
                    <li key={index}>{lap}s</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Stopwatch 