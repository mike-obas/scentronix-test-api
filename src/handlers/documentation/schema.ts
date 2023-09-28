/**
 * @openapi
 * components:
 *  schemas:
 *      GeneralResponse:
 *          type: object
 *          properties:
 *              status:
 *                  type: number
 *                  default: 200
 *              message:
 *                  type: string
 *              response:
 *                  type: object
 *                  properties:
 *                      url:
 *                          type: string
 *                      priority:
 *                          type: number
 *      GeneralError:
 *          type: object
 *          properties:
 *              isError:
 *                  type: boolean
 *              error:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                      code:
 *                          type: string
 */
