using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Ex2.Models;

namespace Ex2.Controllers
{
    public class TotalsController : ApiController
    {
        // GET api/<controller>
        public List<string> Get(int userId) //Get series of user (according to his preferences)
        {
            Total total = new Total();
            return total.GetSeries(userId);
        }

        // POST api/<controller>
        public int Post([FromBody]Total obj)
        {
            return obj.Insert();
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }
        //
        public void Delete(int episodeId, int seriesId, int userId)
        {
            Total total = new Total();
            total.DeletePreferences(episodeId, seriesId, userId);
        }
        
        // DELETE api/<controller>/5
        //public int Delete(int id)
        //{
        //    User us = new User();
        //    return us.Delete(id);
        //}
    }
}