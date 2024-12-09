import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { openInvoicePopup } from "../../features/addInvoicePopup/AddPopupSlice";
import "./top-container.css";

const TopContainer = () => {
  const dispatch = useDispatch();

  return (
    <div className="top-container">
      <div className="wrapper">
        <div className="top-container-content">
          <button
            className="add-invoice"
            onClick={() => dispatch(openInvoicePopup())}
          >
            <FaPlus />
            <span> New Invoice</span>
          </button>

          <div className="invoice-filter-container">
            <span className="filter-title"> Filter by: </span>

            <div className="invoice-filter-detail">
              <span>Select</span>
              <IoIosArrowDown />

              <ul className="invoice-filter-options">
                <li>All</li>
                <li>Pending</li>
                <li>Paid</li>
                <li>Draft</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
