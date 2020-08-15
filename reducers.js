import { API_Callout } from "./action";


export default function counter(state = 0, {type, data}) {
  switch (type) {
    case 'receive_api_data':
      console.log(data)
      return data.info.seed
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
