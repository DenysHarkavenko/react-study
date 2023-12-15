import { MyButton } from "../components/UI/button/MyButton";
import { MyInput } from "../components/UI/input/MyInput";

export function Login() {
    return(
        <div>
            <h1>Signup</h1>
            <form>
                <MyInput type="text" placeholder="Your Login" />
                <MyInput type="password" placeholder="Your Password" />
                <MyButton type="submit">Login</MyButton>
            </form>
        </div>
    )
}