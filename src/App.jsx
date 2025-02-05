import './App.css';
import calculateTelevisionSales from "./helpers/calculateTelevisionSales.js";
import calculateTelevisionBought from "./helpers/calculateTelevisionBought.js";
import calculateTelevisionToBeSold from "./helpers/calculateTelevisionToBeSold.js";
import bestSeller from "./assets/screenshots/bestseller-television.jpg"
import generateTelevisionName from "./helpers/generateTelevisionName.js";
import addValutaOfTelevisionPrice from "./helpers/addValutaOfTelevisionPrice.js";
import addTelevisionScreenAttributes from "./helpers/addTelevisionScreenAttribute.js";
import checkIcon from "./assets/check.png";
import minusIcon from "./assets/minus.png";
import {bestSellingTv, inventory} from "./constants/inventory.js";


function App() {

  const SortInventoryMostSales = (inventory) =>
      [...inventory].sort((a, b) => a.sold - b.sold);

  console.log(SortInventoryMostSales(inventory));

  const sortPriceLowToHigh = (inventory) =>
      [...inventory].sort((a, b) => a.price - b.price)

  console.log(sortPriceLowToHigh(inventory));

  const sortRefreshRate = (inventory) =>
      [...inventory].sort((a, b) => b.refreshRate - a.refreshRate);

  console.log(sortRefreshRate(inventory));

  const sortBiggestScreenSize = [...inventory].sort((a, b) => {
    const biggestScreenA = Math.max(...a.availableSizes)
    const biggestScreenB = Math.max(...b.availableSizes)
    return biggestScreenB - biggestScreenA
  });

  console.log(sortBiggestScreenSize);

  return (
      <>
        <h1>Tech it easy dashboard</h1>
        <h2>Verkoopoverzicht</h2>
        <section className="products-sales">
          <div className="products-sales-outer">
            <div className="products green">
              <p>Aantal verkochte producten</p>
              <p>{calculateTelevisionSales(inventory)}</p>
            </div>
            <div className="products blue">
              <p>Aantal ingekochte producten</p>
              <p>{calculateTelevisionBought(inventory)}</p>
            </div>
            <div className="products red">
              <p>Aantal te verkopen producten</p>
              <p>{calculateTelevisionToBeSold(inventory)}</p>
            </div>
          </div>
        </section>
        <h2>Best verkochte tv</h2>
        <section className="best-selling-tv">
          <div className="best-selling-tv-outer">
            <img src={bestSeller} alt="Best selling tv"/>
            <div className="best-selling-tv-text-cont">
              <h3>{generateTelevisionName(bestSellingTv)}</h3>
              <h4 className="television-price">{addValutaOfTelevisionPrice(bestSellingTv.price)}</h4>
              <p>{addTelevisionScreenAttributes(bestSellingTv)}</p>
              <p className="icon-text">
                <img className="icon" src={checkIcon} alt="check-icon"/> wifi
                <img className="icon" src={minusIcon} alt="minus-icon"/> speech
                <img className="icon" src={checkIcon} alt="check-icon"/> hdr
                <img className="icon" src={checkIcon} alt="check-icon"/> bluetooth
                <img className="icon" src={minusIcon} alt="minus-icon"/> ambilight
              </p>
            </div>
          </div>
        </section>
        <button className="button" onClick={SortInventoryMostSales}> Meest verkocht eerst</button>
        <button className="button" onClick={sortPriceLowToHigh}>Goedkoopst eerst</button>
        <button className="button" onClick={sortRefreshRate}>Meest geschikt voor sport eerst</button>
        <button className="button" onClick={sortBiggestScreenSize}>Grootste schermgroottes eerst</button>
        <section>
          <ul>
            <section className="inventory-section">
              <h2>alle tvs</h2>
              {inventory.map((television) => {
                return <li key={television.type} className="inventory-list">
                  <div className="inventory-tv-outer">
                    <img src={bestSeller} alt="Best selling tv"/>
                    <div className="inventory-tv-text-cont">
                      <h3>{generateTelevisionName(television)}</h3>
                      <h4 className="television-price">{addValutaOfTelevisionPrice(television.price)}</h4>
                      <p>{addTelevisionScreenAttributes(television)}</p>
                      <ul className= "icon-text-inventory">
                        {television.options.map((option, index) => {
                          let icon;
                          if (option.applicable === true) {
                            icon = checkIcon
                          } else icon = minusIcon
                          return <li key={index} className="list-item">
                            <img className="icon-inventory" src={icon} alt="check-icon"/>
                            <p>{option.name}</p>
                          </li>
                        })}
                      </ul>
                    </div>
                  </div>

                </li>
              })}
            </section>
          </ul>
        </section>
      </>
  )
}

export default App

