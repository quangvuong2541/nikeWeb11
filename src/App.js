import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout";
import { Home } from "./pages/Home/Home";
import { Modal } from "./component/Modal/Modal";
import { Profile } from "./component/Profile/Profile";
import { Favorite } from "./component/Favorite/Favorite";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";

import "./App.css";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            caseSensitive={true}
            element={
              <HomeLayout>
                <Home />
              </HomeLayout>
            }
          />

          <Route
            path="/product/:idProduct"
            caseSensitive={true}
            element={
              <HomeLayout>
                <ProductDetail />
              </HomeLayout>
            }
          />

          <Route
            path="/favorite/:idProductFavorite"
            caseSensitive={true}
            element={
              <HomeLayout>
                <Favorite />
              </HomeLayout>
            }
          />

          <Route
            path="/profile/:idProfile"
            caseSensitive={true}
            element={
              <HomeLayout>
                <Profile />
              </HomeLayout>
            }
          />

          <Route
            path="/cart"
            caseSensitive={true}
            element={
              <HomeLayout>
                <Cart />
              </HomeLayout>
            }
          />
        </Routes>
      </Router>

      <Modal />
    </div>
  );
}

export default App;
