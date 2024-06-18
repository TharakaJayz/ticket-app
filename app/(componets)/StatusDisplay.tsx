import React from 'react'

type Props = {
  status: string
}

const StatusDisplay = (props: Props) => {

  const getColor = (status: string) => {
    let color = "bg-slate-200";

    switch (status.toLocaleLowerCase().trim()) {
      case "done":
        color = "bg-green-200"
        return color;

      case "started":
        color = "bg-yellow-200"
        return color;
      case "not started":
        color = "bg-red-200"
        return color;

    }
    return color
  }
  return (
    <span className={`inline-block rounded-fu px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(props.status)}`}>
      {props.status}
    </span>
  )
}

export default StatusDisplay