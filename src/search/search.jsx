import React from 'react';
import "../app.css";
import "./search.css";
import { Post } from '../post';


export function Search() {
  return (
    <main>
      <div className="search-bar">
        <p> You can search reciepies or find best ingridients all around the World!</p>
        <li>
            <label htmlFor="type">Type: </label>
            <select id="type" name="vaType" defaultValue="everything">
            <optgroup label="choose type">
              <option value="everything">everything</option>
              <option value="recipe">recipe</option>
              <option value="ingredients">ingredients locations</option>
            </optgroup>
          </select>

        </li> 
        <li>       
            <label htmlFor="country">Country:</label>
            <input list="countries" id="country" name="country" placeholder="Type to find country's top" />
            <datalist id="countries">
                <option value="Afghanistan"></option>
                <option value="Albania"></option>
                <option value="Algeria"></option>
                <option value="Andorra"></option>
                <option value="Angola"></option>
                <option value="Antigua and Barbuda"></option>
                <option value="Argentina"></option>
                <option value="Armenia"></option>
                <option value="Australia"></option>
                <option value="Austria"></option>
                <option value="Azerbaijan"></option>
                <option value="Bahamas"></option>
                <option value="Bahrain"></option>
                <option value="Bangladesh"></option>
                <option value="Barbados"></option>
                <option value="Belarus"></option>
                <option value="Belgium"></option>
                <option value="Belize"></option>
                <option value="Benin"></option>
                <option value="Bhutan"></option>
                <option value="Bolivia"></option>
                <option value="Bosnia and Herzegovina"></option>
                <option value="Botswana"></option>
                <option value="Brazil"></option>
                <option value="Brunei"></option>
                <option value="Bulgaria"></option>
                <option value="Burkina Faso"></option>
                <option value="Burundi"></option>
                <option value="Cabo Verde"></option>
                <option value="Cambodia"></option>
                <option value="Cameroon"></option>
                <option value="Canada"></option>
                <option value="Central African Republic"></option>
                <option value="Chad"></option>
                <option value="Chile"></option>
                <option value="China"></option>
                <option value="Colombia"></option>
                <option value="Comoros"></option>
                <option value="Congo (Congo-Brazzaville)"></option>
                <option value="Costa Rica"></option>
                <option value="Croatia"></option>
                <option value="Cuba"></option>
                <option value="Cyprus"></option>
                <option value="Czechia (Czech Republic)"></option>
                <option value="Denmark"></option>
                <option value="Djibouti"></option>
                <option value="Dominica"></option>
                <option value="Dominican Republic"></option>
                <option value="Ecuador"></option>
                <option value="Egypt"></option>
                <option value="El Salvador"></option>
                <option value="Equatorial Guinea"></option>
                <option value="Eritrea"></option>
                <option value="Estonia"></option>
                <option value="Eswatini (Swaziland)"></option>
                <option value="Ethiopia"></option>
                <option value="Fiji"></option>
                <option value="Finland"></option>
                <option value="France"></option>
                <option value="Gabon"></option>
                <option value="Gambia"></option>
                <option value="Georgia"></option>
                <option value="Germany"></option>
                <option value="Ghana"></option>
                <option value="Greece"></option>
                <option value="Grenada"></option>
                <option value="Guatemala"></option>
                <option value="Guinea"></option>
                <option value="Guinea-Bissau"></option>
                <option value="Guyana"></option>
                <option value="Haiti"></option>
                <option value="Honduras"></option>
                <option value="Hungary"></option>
                <option value="Iceland"></option>
                <option value="India"></option>
                <option value="Indonesia"></option>
                <option value="Iran"></option>
                <option value="Iraq"></option>
                <option value="Ireland"></option>
                <option value="Israel"></option>
                <option value="Italy"></option>
                <option value="Jamaica"></option>
                <option value="Japan"></option>
                <option value="Jordan"></option>
                <option value="Kazakhstan"></option>
                <option value="Kenya"></option>
                <option value="Kiribati"></option>
                <option value="Kuwait"></option>
                <option value="Kyrgyzstan"></option>
                <option value="Laos"></option>
                <option value="Latvia"></option>
                <option value="Lebanon"></option>
                <option value="Lesotho"></option>
                <option value="Liberia"></option>
                <option value="Libya"></option>
                <option value="Liechtenstein"></option>
                <option value="Lithuania"></option>
                <option value="Luxembourg"></option>
                <option value="Madagascar"></option>
                <option value="Malawi"></option>
                <option value="Malaysia"></option>
                <option value="Maldives"></option>
                <option value="Mali"></option>
                <option value="Malta"></option>
                <option value="Marshall Islands"></option>
                <option value="Mauritania"></option>
                <option value="Mauritius"></option>
                <option value="Mexico"></option>
                <option value="Micronesia"></option>
                <option value="Moldova"></option>
                <option value="Monaco"></option>
                <option value="Mongolia"></option>
                <option value="Montenegro"></option>
                <option value="Morocco"></option>
                <option value="Mozambique"></option>
                <option value="Myanmar (Burma)"></option>
                <option value="Namibia"></option>
                <option value="Nauru"></option>
                <option value="Nepal"></option>
                <option value="Netherlands"></option>
                <option value="New Zealand"></option>
                <option value="Nicaragua"></option>
                <option value="Niger"></option>
                <option value="Nigeria"></option>
                <option value="North Korea"></option>
                <option value="North Macedonia"></option>
                <option value="Norway"></option>
                <option value="Oman"></option>
                <option value="Pakistan"></option>
                <option value="Palau"></option>
                <option value="Panama"></option>
                <option value="Papua New Guinea"></option>
                <option value="Paraguay"></option>
                <option value="Peru"></option>
                <option value="Philippines"></option>
                <option value="Poland"></option>
                <option value="Portugal"></option>
                <option value="Qatar"></option>
                <option value="Romania"></option>
                <option value="Russia"></option>
                <option value="Rwanda"></option>
                <option value="Saint Kitts and Nevis"></option>
                <option value="Saint Lucia"></option>
                <option value="Saint Vincent and the Grenadines"></option>
                <option value="Samoa"></option>
                <option value="San Marino"></option>
                <option value="Saudi Arabia"></option>
                <option value="Senegal"></option>
                <option value="Serbia"></option>
                <option value="Seychelles"></option>
                <option value="Sierra Leone"></option>
                <option value="Singapore"></option>
                <option value="Slovakia"></option>
                <option value="Slovenia"></option>
                <option value="Solomon Islands"></option>
                <option value="South Africa"></option>
                <option value="South Korea"></option>
                <option value="Spain"></option>
                <option value="Sri Lanka"></option>
                <option value="Sudan"></option>
                <option value="Sweden"></option>
                <option value="Switzerland"></option>
                <option value="Syria"></option>
                <option value="Taiwan"></option>
                <option value="Tajikistan"></option>
                <option value="Thailand"></option>
                <option value="Turkey"></option>
                <option value="Ukraine"></option>
                <option value="United Kingdom"></option>
                <option value="United States"></option>
                <option value="Vietnam"></option>
                <option value="Yemen"></option>
                <option value="Zimbabwe"></option>
            </datalist>
            </li>

        <li>
            <label htmlFor="Region">Region: </label>
            <input type="Region" id="region" name="varRegion" placeholder="Type to find region's top" />
          </li>
        <li>
            <label htmlFor="District" > District: </label>
            <input type="District" id = "district" name = "varDistrict" placeholder="Type to find disctrict's top"/>
        </li>

          <p></p>
        <div className="create">
        <button type="search" className="btn btn-primary">Search</button>
        <p>Trending recipes and ingridients locations right now from around the world!</p>
        </div>
      </div>

      <br></br>

      <div className="recipe">
      <p className="header"><em>Ingredients in World of Warcraft</em></p>
      <p>Herbs in Elwynn Forest, ore in Dun Morogh, fish in Stranglethorn Vale, and spices in Darnassus. Check local vendors htmlFor items.</p>
      <p><em>Locations of ingredients</em>: Warcraft, Stormwind</p>
      <button type="button" className="btn btn-primary like">105 likes</button>
  </div>
  
  <div className="recipe">
      <p className="header"><em>Mac & Cheese</em></p>
      <p>Cook pasta, make a cheese sauce by melting butter, adding flour, then milk. Stir in cheese until smooth. Combine with pasta, season with salt and pepper. Bake htmlFor a golden finish. Enjoy!</p>
      <p><em>Recipe</em>: United States, Utah, Provo</p>
      <button type="button" className="btn btn-primary like">85 likes</button>
  </div>
  
  <div className="recipe">
      <p className="header"><em>Miso Soup</em></p>
      <p>Mix miso paste with dashi broth. Add tofu, seaweed, and green onions. Simmer and serve hot.</p>
      <p><em>Recipe</em>: Japan, Tokyo, Shibuya</p>
      <button type="button" className="btn btn-primary like">55 likes</button>
  </div>
  
  <div className="recipe">
      <p className="header"><em>Russian Blinis</em></p>
      <p>Mix flour, eggs, milk, water, sugar, and salt. Add melted butter. Fry thin pancakes on a hot pan with oil. Flip when golden. Serve with sour cream, jam, or honey.</p>
      <p><em>Recipe</em>: Russia, Moscow, Arbat</p>
      <button type="button" className="btn btn-primary like">35 likes</button>
  </div>
  
    </main>
  );
}
