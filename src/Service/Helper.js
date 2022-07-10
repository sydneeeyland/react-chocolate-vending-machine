// @desc Dummy data
import Data from "../Data/Dummy.json";

// @desc SweetAlert2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ShowMessage = withReactContent(Swal);

const MakePurchase = (id) => {
  const find = Data.chocobar.filter((x) => x.id === id);
  const getBalance = localStorage.getItem("Balance");
  if (getBalance >= parseFloat(find[0].price)) {
    const Change = getBalance - find[0].price;
    ShowMessage.fire({
      title: (
        <p>
          <span>You purchased</span>
          <br />
          <span>
            <i>{find[0].description}</i>
          </span>
          <br /> <br />
          <i>For ${find[0].price}</i>
          <br /> <br />
          Your change: ${parseFloat(Change).toFixed(2)}
        </p>
      ),
      icon: "success",
    }).then((result) => {
      if (result) {
        localStorage.removeItem("Balance");
        document.getElementById("Balance").innerHTML = "$0.00";
      }
    });
  } else {
    ShowMessage.fire({
      title: "You don't have enough balance",
      icon: "error",
    });
  }
};

export { MakePurchase };
