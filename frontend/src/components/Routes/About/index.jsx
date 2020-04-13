import React from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const About = () => {
  return (
    <div
      style={{
        height: "60vh",
        padding: "2vh",
        maxWidth: "750px",
        margin: "1vh auto",
        padding: "5vw",
      }}
    >
      <Typography variant="h4">About the Wyandotte County Land Bank</Typography>
      <Typography variant="body1" align="left">
        The Wyandotte County Land Bank is a unit of the Economic Development
        Department. The Land Bank contains more than 3,500 vacant lots acquired
        through the Judicial Foreclosure Process and donations. The duties of
        this division are to put delinquent tax properties back on the tax roll
        through various strategies that benefit the community. This includes
        marketing, removing prior year taxes, maintaining an inventory list,
        accepting parcels as donations and researching neighborhoods in
        Wyandotte County that contain delinquent taxes.
      </Typography>

      <div style={{ margin: "2vh 0 2vh" }}>
        {/* How? */}
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="howpanel-content"
            id="howpanel-header"
          >
            <Typography>
              How does property get into the Wyandotte County Land Bank?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="subtitle2" align="left">
              The Wyandotte County Land Bank acquires its property through tax
              foreclosure. The land bank also reserves the right to accept land
              through private donation that is deemed necessary or beneficial to
              Wyandotte County’s community building efforts.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* What? */}
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="whatpanel-content"
            id="whatpanel-header"
          >
            <Typography>
              What types of property are in the Wyandotte County Land Bank?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="subtitle2" align="left">
              The Land Bank is divided into (3) types of parcels, which are
              determined by the Unified Government Planning and Zoning
              Department.
              <br />
              Non-Buildable Parcels: Parcels where houses or other large
              buildings cannot be built, but garages, fencing, paving, or
              similar structures can be built.
              <br />
              Buildable Parcels: Parcels of land without any free-standing
              structures before purchase where structures such as houses or
              other large buildings can be built.
              <br />
              Parcels with a Structure: Parcels of land with structures already
              on them (including homes, garages, and businesses).
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Who? */}
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="whopanel-content"
            id="whopanel-header"
          >
            <Typography>
              Who controls the property in the Land Bank, and what power do they
              have?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="subtitle2" align="left">
              The Land Bank Manager operates the Land Bank and serves at the
              direction of the Land Bank Board of Trustees. Under state law
              (K.S.A. 19-26,109), the board assumes possession and control of
              any property it acquires and has the power to hold and administer
              such property.
              <br />
              In the administration of property, the board is required to do the
              following:
              <ul>
                <li>
                  Manage, maintain and protect or temporarily use for a public
                  purpose such property in the manner the board deems
                  appropriate;
                </li>
                <li>
                  Compile and maintain a written inventory of all such property.
                  The inventory shall be available for public inspection and
                  distribution at all times;
                </li>
                <li>
                  Study, analyze and evaluate potential, present and future uses
                  for such property which would provide for the effective
                  reutilization of such property;
                </li>
                <li>
                  Plan for and use the board's best efforts to consummate the
                  sale or other disposition of such property at such times and
                  upon such terms and conditions deemed appropriate;
                </li>
                <li>
                  Establish and maintain records and accounts reflecting all
                  transactions, expenditures and revenues relating to the bank's
                  activities, including separate itemizations of all
                  transactions, expenditures and revenues concerns each
                  individual parcel of property acquired;
                </li>
                <li>
                  Thirty days prior to the sale of any property owned by the
                  bank, publish a notice in the official county newspaper
                  announcing such sale.
                </li>
              </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
};

export default About;
