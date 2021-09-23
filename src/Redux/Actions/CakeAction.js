import { BUY_CAKE } from "../Constants/CakeConstant"

export const buyCake = (cake = 1) => {
    return {
        type: BUY_CAKE,
        payload: cake
    }
}