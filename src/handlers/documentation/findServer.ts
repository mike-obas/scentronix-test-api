// Get lowest priority server
/**
 * @openapi
 * /find-server:
 *  get:
 *    summary: Returns a live server with the lowest priority.
 *    tags:
 *      - User
 *    #description: Optional, more detailed description.
 *    responses:
 *      200:
 *        description: success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GeneralResponse'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GeneralError'
 *      401:
 *        description: Bad request
 */
