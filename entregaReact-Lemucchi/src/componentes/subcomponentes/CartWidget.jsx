import { Button } from "antd"
import { BaggageClaim} from "lucide-react"
function CartWidget() {
  return (
    <div>
      <Button>
            <BaggageClaim width={25} height={25}/>
            <span className="absolute inline-block top-0">
                <span className="relative text-black font-bold text-s rounded-full p-4 ">0</span>
            </span>
        </Button>
    </div>
  )
}

export default CartWidget
