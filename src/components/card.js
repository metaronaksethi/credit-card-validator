import React from 'react';
import UseCCValidate from '../hooks/useCCValidate';
import closeIcon from "../static/cards/close.svg"

const Card = () => {

    const { cardNumber, setCardNumber, cardType, cardIcon, isValid, handelOnChange, handleOnBlur } = UseCCValidate();

    return (
        <div className="card-container">
            <input
                id="card"
                className="card-input"
                type="text"
                inputMode="numeric"
                onChange={handelOnChange}
                value={cardNumber}
                autoComplete="off"
                onBlur={handleOnBlur}
                maxLength={19}
                placeholder="0000 0000 0000 0000"
            />
            {cardType && isValid && <img alt={cardType} className="ccicon" src={cardIcon} />}
            {!isValid && (
                <img
                    alt='remove'
                    className="closeicon"
                    src={closeIcon}
                    onClick={() => setCardNumber("")}
                />
            )}
            {!isValid && <span className="card-error">Invaild card number</span>}
        </div>

    );
}

export default Card;
