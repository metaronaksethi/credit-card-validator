import { useState, useEffect } from "react";
import { getCType, validateCardNumber } from "../components/utils";

const UseCCValidate = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState(null);
  const [cardIcon, setCardIcon] = useState(null);
  const [isValid, setIsValid] = useState(true);

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
    const cardValidObj = await getCType(enterValue.replace(/ /g, ""));
    setCardType(cardValidObj.type);
    setCardIcon(cardValidObj.icon);
    setIsValid(cardValidObj.isValid);
  };

  const handleOnBlur = (e) => {
    if (cardNumber.length > 0) {
      const isValidCard = validateCardNumber(cardNumber.replace(/\D/g, ""));
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
  };
};

export default UseCCValidate;
