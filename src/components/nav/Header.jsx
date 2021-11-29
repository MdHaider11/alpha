import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../store/logo/logo.png";
import "./Header.css";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/connectors";

function Header() {
	const { active, account, library, connector, activate, deactivate } =
		useWeb3React();

	const [walletId, setWalletId] = useState("");

	async function connect() {
		try {
			await activate(injected);
			setWalletId(account);
		} catch (ex) {
			console.log(ex);
		}
	}

	async function disconnect() {
		try {
			deactivate();
			setWalletId("");
		} catch (ex) {
			console.log(ex);
		}
	}

	const getwalletId = (id) => {
		const idLength = id.length;
		const firstId = id.slice(0, 5);
		const lastId = walletId.slice(idLength - 4);
		return firstId + "...." + lastId;
	};

	return (
		<>
			<Navbar className="navbar-box" expand="lg">
				<Container fluid>
					<div className="d-lg-flex justify-content-between align-items-center w-100">
						<div className="d-flex align-content-center justify-content-between">
							<Navbar.Brand href="#home">
								{/* <img className="logo" src={Logo} alt="" /> */}
								<a
									href="/"
									style={{
										color: "#be9e58",
										fontSize: "2.5rem",
										fontWeight: "bold",
									}}
								>
									<span style={{ fontSize: "6rem" }}>
										&alpha;
									</span>
									LPH
									<span>&alpha;</span>
								</a>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="#fff"
									class="bi bi-list"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
									/>
								</svg>
							</Navbar.Toggle>
						</div>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto pt-4 pt-lg-0 w-100">
								<Nav.Link href="/" style={{ fontSize: "15px" }}>
									Home
								</Nav.Link>
								<Nav.Link
									href="/stack"
									style={{ fontSize: "15px" }}
								>
									Stake
								</Nav.Link>

								<Nav.Link
									href="/alpha"
									style={{ fontSize: "15px" }}
								>
									Alpha
								</Nav.Link>
							</Nav>
							<Nav className="mt-1 mt-lg-0 w-100">
								{walletId ? (
									<Nav.Link
										className="navbar-wallet-btn ms-auto"
										onClick={disconnect}
										style={{ fontSize: "15px" }}
									>
										{getwalletId(account)}
									</Nav.Link>
								) : (
									<Nav.Link
										className="navbar-wallet-btn ms-lg-auto"
										onClick={connect}
										style={{
											fontSize: "15px",
											wordWrap: "keep-all",
										}}
									>
										Connect to a wallet
									</Nav.Link>
								)}
							</Nav>
						</Navbar.Collapse>
					</div>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
