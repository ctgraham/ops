/**
 * @file cypress/tests/data/60-content/PdanielSubmission.spec.js
 *
 * Copyright (c) 2014-2021 Simon Fraser University
 * Copyright (c) 2000-2021 John Willinsky
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 */

describe('Data suite tests', function() {
	it('Create a submission', function() {
		var title = 'Towards Designing an Intercultural Curriculum: A Case Study from the Atlantic Coast of Nicaragua';
		cy.register({
			'username': 'pdaniel',
			'givenName': 'Patricia',
			'familyName': 'Daniel',
			'affiliation': 'University of Wolverhampton',
			'country': 'United Kingdom',
		});

		cy.createSubmission({
			title,
			'abstract': 'One of the challenges still to be met in the 21st century is that of genuinely embracing diversity. How can education help to overcome the barriers that continue to exist between people on the basis of language, culture and gender? This case study takes the Atlantic Coast of Nicaragua as an example of a multilingual/multiethnic region and examines how the community university URACCAN is contributing to the development of interculturality. It describes participatory research that was carried out with university staff and students with the intention of defining an intercultural curriculum and appropriate strategies for delivering such. One model used as a basis for discussions was the Model for Community Understanding from the Wales Curriculum Council, which emphasises the belonging of the individual to different communities or cultures at the same time. Factors supporting the development of an intercultural curriculum include the university’s close involvement with the ethnic communities it serves. However, ethno-linguistic power relations within the region and the country as a whole, still militate against egalitarianism within the university. The research highlights the importance of participatory pedagogy as the basis for promoting interculturality and achieving lasting social transformation.',
			'keywords': [
				'21st Century',
				'Diversity',
				'Multilingual',
				'Multiethnic',
				'Participatory Pedagogy',
				'Language',
				'Culture',
				'Gender',
				'Egalitarianism',
				'Social Transformation'
			],
		});

		cy.logout();
		cy.findSubmissionAsEditor('dbarnes', null, 'Daniel');
		cy.get('.pkp_workflow_decisions button:contains("Post the preprint")').click();
		cy.get('div.pkpPublication button:contains("Post"):visible').click();
		cy.get('div:contains("All requirements have been met. Are you sure you want to post this?")');
		cy.get('[id^="publish"] button:contains("Post")').click();
	});
});
