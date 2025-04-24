import React from 'react';

const Homeapp = () => {
  return (
    <div className="container my-5">
      {/* Sección principal */}
      <div className="row align-items-center">
        {/* Texto */}
        <div className="col-md-6 mb-4">
          <h5 className="text-uppercase text-muted">System</h5>
          <h1 className="display-4 fw-bold"> <span className="text-primary">HIS </span>MEDICAL DATA</h1>
          <p className="text-dark-gray">
            lorem 3000 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Iconos informativos */}
          <div className="d-flex mt-4">
            <div className="me-4 text-center">
              <img src="https://via.placeholder.com/40" alt="Icon1" />
              <p className="mt-2 mb-0">Lorem Ipsum</p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/40" alt="Icon2" />
              <p className="mt-2 mb-0">Lorem Ipsum</p>
            </div>
          </div>
        </div>

        {/* Imagen principal */}
        <div className="col-md-6">
          <img
            src="/Prueba.png"
            alt="Family House"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Galería miniatura */}
      <div className="row mt-4">
        <div className="col">
          <div className="d-flex justify-content-start gap-3">
            <img src="https://via.placeholder.com/100" alt="Mini1" className="rounded" />
            <img src="https://via.placeholder.com/100" alt="Mini2" className="rounded" />
            <img src="https://via.placeholder.com/100" alt="Mini3" className="rounded" />
          </div>
        </div>
      </div>

      {/* Footer informativo */}
      <footer className="bg-dark text-white text-center py-4 mt-5 rounded">
        <div className="mb-2">📞 +21 123 456 789</div>
        <div className="mb-2">
          🌐 <a href="https://www.yoursite.com" className="text-info text-decoration-none">www.yoursite.com</a>
        </div>
        <div>
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-twitter mx-2"></i>
          <i className="bi bi-instagram mx-2"></i>
        </div>
      </footer>
    </div>
  );
};

export default Homeapp;
