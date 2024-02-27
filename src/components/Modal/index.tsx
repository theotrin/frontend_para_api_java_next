interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}
import style from "./Modal.module.scss";

export function Modal({ isOpen, setOpen }: IModal) {
  if (isOpen) {
    return (
      <div className={style.background}>
        <div className={style.modal}>
          <h2>Produto criado com sucesso!</h2>
          <button onClick={() => setOpen(!open)}>
            <span>Fechar</span>
          </button>
        </div>
      </div>
    );
  } else {
    <></>;
  }
}
