
import {$get,$post} from '../utils/request'

export let Login = async (params) => {
    let data = await $post('login',params)
    console.log(data)
}
