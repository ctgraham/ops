<?php
/**
 * @file classes/services/QueryBuilders/ContextQueryBuilder.php
 *
 * Copyright (c) 2014-2021 Simon Fraser University
 * Copyright (c) 2000-2021 John Willinsky
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @class ContextQueryBuilder
 * @ingroup query_builders
 *
 * @brief Server list query builder
 */

namespace APP\services\queryBuilders;

class ContextQueryBuilder extends \PKP\services\queryBuilders\PKPContextQueryBuilder
{
    /** @copydoc \PKP\services\queryBuilders\PKPContextQueryBuilder::$db */
    protected $db = 'servers';

    /** @copydoc \PKP\services\queryBuilders\PKPContextQueryBuilder::$dbSettings */
    protected $dbSettings = 'server_settings';

    /** @copydoc \PKP\services\queryBuilders\PKPContextQueryBuilder::$dbIdColumn */
    protected $dbIdColumn = 'server_id';
}
