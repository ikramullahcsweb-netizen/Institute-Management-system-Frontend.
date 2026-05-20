import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/step2 scientist logo.jpeg";

function ManagerWallet() {
  const navigate = useNavigate();

  const walletData = [
    {
      id: 1,
      stdid: "SID123456",
      walletid: "WALLET-101",
      balance: "5000",
    },
    {
      id: 2,
      stdid: "SID654321",
      walletid: "WALLET-102",
      balance: "2500",
    },
  ];

  const [itnumber, setItnumber] = useState("");
  const [walletId, setWalletId] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (mm < 10) mm = "0" + mm;
    if (dd < 10) dd = "0" + dd;

    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handlesearch = (e) => {
    e.preventDefault();

    const filteredWallet = walletData.filter(
      (wallet) => wallet.stdid === itnumber,
    );

    setWalletId(filteredWallet);

    filteredWallet.length === 0
      ? toast.error("Wallet Not Found")
      : toast.success("Wallet Found");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Confirm Payment",
      text: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1DB6D9",
      cancelButtonColor: "#7ED957",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Wallet Confirmed");

        setTimeout(() => {
          navigate("/managerfinancial");
        }, 1500);
      }
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-2">
      <Toaster />

      {/* LOGO */}
      <div className="flex justify-center">
        <div className="w-[220px] h-[220px] rounded-full border-4 border-[#1DB6D9] flex items-center justify-center">
          <img src={logo} alt="logo" className="w-40" />
        </div>
      </div>

      {/* TITLE */}
      <div className="max-w-5xl mx-auto mt-2 bg-[#DDF7F8] border border-black rounded-2xl py-3">
        <h1 className="text-center text-3xl font-bold text-[#1DB6D9]">
          Wallet
        </h1>
      </div>

      {/* SEARCH */}
      <div className="max-w-5xl mx-auto mt-3">
        <form
          onSubmit={handlesearch}
          className="bg-[#DDF7F8] border border-black rounded-2xl p-4"
        >
          <label className="block text-lg font-bold mb-2">
            Enter IT Number
          </label>

          <input
            type="text"
            placeholder="SID123456"
            required
            value={itnumber}
            onChange={(e) => setItnumber(e.target.value)}
            className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-[#384D6C] hover:bg-[#1DB6D9] text-white py-3 rounded-xl font-bold transition-all"
          >
            Search
          </button>
        </form>

        {/* WALLET DATA */}
        {walletId.map((wall) => (
          <form
            key={wall.id}
            onSubmit={handleSubmit}
            className="mt-3 bg-[#DDF7F8] border border-black rounded-2xl p-4"
          >
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Wallet ID</label>

              <input
                type="text"
                value={wall.walletid}
                readOnly
                className="w-full border border-black rounded-xl p-3 bg-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Date</label>

              <input
                type="date"
                value={date}
                readOnly
                className="w-full border border-black rounded-xl p-3 bg-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Amount</label>

              <input
                type="text"
                value={wall.balance}
                readOnly
                className="w-full border border-black rounded-xl p-3 bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#384D6C] hover:bg-red-600 text-white py-3 rounded-xl font-bold transition-all"
            >
              Confirm
            </button>
          </form>
        ))}
      </div>
    </div>
  );
}

export default ManagerWallet;
