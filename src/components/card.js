import React from 'react';
import UseCCValidate from '../hooks/useCCValidate';
import closeIcon from "../static/cards/close.svg"

const Card = () => {

    const { cardNumber, setCardNumber, cardType, cardIcon, isValid, handelOnChange, handleOnBlur, errMsg } = UseCCValidate();

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
            {cardType && isValid && <img alt="card-icon" className="ccicon" src={cardIcon} />}
            {!isValid && (
                <img
                    alt='remove'
                    data-testid="closeicon"
                    className="closeicon"
                    src={closeIcon}
                    onClick={() => setCardNumber("")}
                />
            )}
           <span data-testid="card-error" className="card-error">{errMsg}</span>
        </div>

    );
}

export default Card;
