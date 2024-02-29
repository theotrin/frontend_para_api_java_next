interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  productId: number;
  productName: string;
  productPrice: number;
  productDescription: string;
}
import api from "@/services/api";
import style from "./Modal.module.scss";
import { useState } from "react";

function refreshPage() {
  window.location.reload();
}

export function UpdateModal({
  isOpen,
  setOpen,
  productId,
  productName,
  productPrice,
  productDescription,
}: IModal) {
  if (isOpen) {
    const [price, setPrice] = useState<number>(productPrice);
    const [nameProduct, setNameProduct] = useState(productName);
    const [descriptionProduct, setDescriptionProduct] =
      useState(productDescription);

    const handleChange = (e: any) => {
      const value = e.target.value.replace(/\D/g, "");
      setPrice(value);
    };

    return (
      <div className={style.background}>
        <div className={style.modal}>
          <h2>Editar: {productName}</h2>
          <div className={style.formUpdate}>
            <div className={style.nameProduct}>
              <span>Nome </span>
              <input
                type="text"
                placeholder="editar nome do produto"
                value={nameProduct}
                onChange={(e) => {
                  setNameProduct(e.target.value);
                }}
              />
            </div>

            <div className={style.priceProduct}>
              <span>Preço </span>
              <input
                placeholder="editar preço do produto"
                value={price}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className={style.descriptionProduct}>
              <span>Descrição </span>
              <input
                type="text"
                placeholder="editar descrição do produto"
                value={descriptionProduct}
                onChange={(e) => {
                  setDescriptionProduct(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={style.buttonsContainer}>
            <button
              onClick={() => {
                setOpen(!open);

                api
                  .put(`/products/${productId}`, {
                    name: nameProduct,
                    price: price * 100,
                    description: descriptionProduct,
                  })
                  .then((response) => {
                    refreshPage();
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }}
            >
              <span>Confirmar</span>
            </button>
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span>Cancelar</span>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    <></>;
  }
}
