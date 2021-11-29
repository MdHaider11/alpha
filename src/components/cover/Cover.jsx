import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Cover.css";
import Logo from "../../store/logo/thicker-neon.png";

function Cover() {
	return (
		<div className="cover-box">
			<Container>
				<div className="cover-background">
					{/* <img src={Logo} className="round-neon" /> */}
					<div className="cover-header">
						Be a DeFi Chef with Alpha.
					</div>
					<p className="cover-description">
						Swap, earn, stack yields, lend, borrow, leverage all on
						one decentralized, community driven platform. Welcome
						home to DeFi.
					</p>
					<div className="cover-button">
						<Button href="/stack" className="colored-button">
							Enter App
						</Button>
						<Button className="learn-button">Learn More</Button>
					</div>
				</div>
				<div className="cover-information-boxes">
					<Row>
						<Col lg={3}>
							<div className="round-box mb-3 mb-lg-0">
								<h2>$6.70</h2>
								<p>$Alpha Price</p>
							</div>
						</Col>
						<Col lg={3}>
							<div className="round-box mb-3 mb-lg-0">
								<h2>$6.70</h2>
								<p>$Alpha Price</p>
							</div>
						</Col>
						<Col lg={3}>
							<div className="round-box mb-3 mb-lg-0">
								<h2>$6.70</h2>
								<p>$Alpha Price</p>
							</div>
						</Col>
						<Col lg={3}>
							<div className="round-box mb-3 mb-lg-0">
								<h2>$6.70</h2>
								<p>$Alpha Price</p>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default Cover;
