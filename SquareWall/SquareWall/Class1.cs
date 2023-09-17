using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SquareWall
{
    class TopWall             
    {
        private int mMargin;
        private int mHeight;
        private int mWidth;

        public int Margin                      // Property {
        {
            get { return mMargin; }
            set { mMargin = value; }
        }

        public int Height
        {
            get { return mHeight; }
            set { mHeight = value; }
        }

        public int Width
        {
            get { return mWidth; }
            set { mWidth = value; }          
        }                                    //             }

        public TopWall()        //Costructor
        {
            this.mMargin = 3;
            this.mHeight = 10;
            this.mWidth = 60;
        }


    }





    class RightWall
    {
        private int mMargin;
        private int mHeight;
        private int mWidth;

        public int Margin                      // Property {
        {
            get { return mMargin; }
            set { mMargin = value; }
        }

        public int Height
        {
            get { return mHeight; }
            set { mHeight = value; }
        }

        public int Width
        {
            get { return mWidth; }
            set { mWidth = value; }
        }                                    //             }

        public RightWall()        //Costructor
        {
            this.mMargin = 3;
            this.mHeight = 60;
            this.mWidth = 10;
        }


    }





    class LeftWall
    {
        private int mMargin;
        private int mHeight;
        private int mWidth;

        public int Margin                      // Property {
        {
            get { return mMargin; }
            set { mMargin = value; }
        }

        public int Height
        {
            get { return mHeight; }
            set { mHeight = value; }
        }

        public int Width
        {
            get { return mWidth; }
            set { mWidth = value; }
        }                                    //             }

        public LeftWall()        //Costructor
        {
            this.mMargin = 3;
            this.mHeight = 60;
            this.mWidth = 10;
        }


    }








    class BotWall
    {
        private int mMargin;
        private int mHeight;
        private int mWidth;

        public int Margin                      // Property {
        {
            get { return mMargin; }
            set { mMargin = value; }
        }

        public int Height
        {
            get { return mHeight; }
            set { mHeight = value; }
        }

        public int Width
        {
            get { return mWidth; }
            set { mWidth = value; }
        }                                    //             }

        public BotWall()        //Costructor
        {
            this.mMargin = 0; //********To be completed***********//
            this.mHeight = 10;
            this.mWidth = 60;
        }


    }

}
