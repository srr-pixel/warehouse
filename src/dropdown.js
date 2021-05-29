import React, {useState} from "react"

export default function Dropdown({
    options,
    label,
    id,
     prompt,
    value,
    onchange
}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="dropdown">
            <div className="control" onClick={() => setOpen(prev => !prev)}>
                <div className="selected-value">{value ? value[label] : prompt }</div>
                <div className={`arrow ${open ? "open" : null }`}/>

            </div>
            <div className={`options ${open ? "open" : null }`}>
                {
                    options.map(option => <div key={option[id]} className={`option ${value === option ? "selected" : null}`}
                    onClick={() => {
                        onchange(option);
                        setOpen(false);
                    }}>{option[label]}</div>
                    )
                }
                
            </div>

        </div>
    )
}