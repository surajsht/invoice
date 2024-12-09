import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { closeInvoicePopup } from "../../features/addInvoicePopup/AddPopupSlice";
import "./newInvoice.css";

const NewInvoice = () => {
  const invoicePopupState = useSelector(
    (state) => state.addInvoicePopup.isOpen
  );
  const dispatch = useDispatch();

  return (
    <div
      className={`new-invoice-container ${invoicePopupState ? "active" : ""}`}
    >
      <div className="new-invoice-content">
        <div className="bill-from">
          <span className="invoice-label-title"> Bill From </span>

          <form className="bill-from-form">
            <div className="form-item">
              <label htmlFor="street-address"> Street Address </label>
              <input type="text" />
            </div>

            <div className="form-item-group">
              <div className="form-item">
                <label htmlFor="street-address"> Street Address </label>
                <input type="text" />
              </div>

              <div className="form-item">
                <label htmlFor="street-address"> Street Address </label>
                <input type="text" />
              </div>

              <div className="form-item">
                <label htmlFor="street-address"> Street Address </label>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>

        <div className="bill-to">
          <span className="invoice-label-title"> Bill To </span>

          <form className="bill-to-form">
            <div className="form-item">
              <label htmlFor="clients-name">Client's Name</label>

              <input type="text" />
            </div>

            <div className="form-item">
              <label htmlFor="clients-name">Client's Name</label>

              <input type="text" />
            </div>

            <div className="form-item">
              <label htmlFor="clients-name">Client's Name</label>

              <input type="text" />
            </div>

            <div className="form-item-group">
              <div className="form-item">
                <label htmlFor="clients-name">Client's Name</label>

                <input type="text" />
              </div>

              <div className="form-item">
                <label htmlFor="clients-name">Client's Name</label>

                <input type="text" />
              </div>

              <div className="form-item">
                <label htmlFor="clients-name">Client's Name</label>

                <input type="text" />
              </div>
            </div>
          </form>
        </div>

        <div className="invoice-info">
          <form action="" className="invoice-info-form">
            <div className="form-item">
              <label htmlFor="project-description"> Project Description </label>
              <input type="text" />
            </div>
          </form>
        </div>

        <div className="item-list">
          <span className="item-list-title"> Item List Title </span>

          <ul className="item-list-table-head">
            <li>Item Name</li>
            <li>Qty.</li>
            <li>Price</li>
            <li>Total</li>
            <li>Delete</li>
          </ul>

          <ul className="item-list-table-body">
            <li>
              <input type="text" />
            </li>
            <li>
              <input type="number" />
            </li>
            <li>
              <input type="number" />
            </li>
            <li>
              <input type="number" />
            </li>
            <li>
              <button className="delete-item-list">
                <MdDelete />
              </button>
            </li>
          </ul>

          <button className="add-new-item">
            <FaPlus />
            <span> Add New Item</span>
          </button>
        </div>

        <div className="invoice-btn-container">
          <button
            className="new-invoice-btn invoice-btn-outlined discard"
            onClick={() => dispatch(closeInvoicePopup())}
          >
            Discard
          </button>

          <div className="save-invoice-btn-wrapper">
            <button className="new-invoice-btn invoice-btn-outlined save-as-draft">
              Save as Draft
            </button>
            <button className="new-invoice-btn save"> Save </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInvoice;
