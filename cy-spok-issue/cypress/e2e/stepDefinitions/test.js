import { Given } from "@badeball/cypress-cucumber-preprocessor";
import spok from "cy-spok";

Given(/^I try spok$/, () => {
  const object = {
    a: 1,
    b: 2,
    C: 3,
  };
  cy.wrap(object).should(
    spok({
      $topic: "Test",
      a: 1,
      b: spok.range(1, 8),
      c: spok.number,
    })
  );
});
