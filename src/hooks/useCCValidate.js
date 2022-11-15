import { useState, useEffect } from "react";
import { getCardType, validateCardNumber } from "../components/utils";

const UseCCValidate = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState(null);
  const [cardIcon, setCardIcon] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (cardNumber.length === 0) {
      setCardType(null);
      setCardIcon(null);
      setIsValid(true);
    }
  }, [cardNumber]);

  const handelOnChange = async (e) => {
    let enterValue = e.target.value;
    if (/[^0-9-\s]+/.test(enterValue)) return false;
    setCardNumber(
      enterValue
        .replace(/\W/gi, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
    );
    const cardValidObj = await getCardType(enterValue.replace(/ /g, ""));
    setCardType(cardValidObj.type);
    setCardIcon(cardValidObj.icon);
    setIsValid(cardValidObj.isValid);
    cardValidObj.isValid === false
      ? setErrMsg("Invaild card number")
      : setErrMsg("");
  };

  const handleOnBlur = (e) => {
    if (cardNumber.length > 0) {
      const isValidCard = validateCardNumber(cardNumber.replace(/\D/g, ""));
      !isValidCard ? setErrMsg("Invaild card number") : setErrMsg("");
      setIsValid(isValidCard);
    }
  };

  return {
    cardNumber,
    setCardNumber,
    cardType,
    cardIcon,
    isValid,
    handelOnChange,
    handleOnBlur,
    errMsg,
  };
};

export default UseCCValidate;
